const { cloudinary } = require("./Utils/Cloudinary/cloudinary.js");

export default async function handler(req, res) {
    const { resources } = await cloudinary.search
      .expression("folder:SoloProject")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    const urls = resources.map((file) => file.url);
    res.send(urls);
 
}
