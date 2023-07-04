import {Product} from "@/models/Product";
import { Categoryc } from "@/models/Category";
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({_id:req.query.id}));
    } else {
      res.json(await Product.find().populate('category'));
    }
  }

  if (method === 'POST') {
   try {
    const {title,description,price,images,category,properties} = req.body;
    const productDoc = await Product.create({
      title,description,price,images,category,properties,
    })

    if(!category){
      res.status(404).json({ error: 'plese input category' });
    }

    res.json(productDoc);

   } catch (error) {
        res.status(500).json({ error: 'Server error' });
   }
  }

  if (method === 'PUT') {
    const {title,description,price,images,category,properties,_id} = req.body;
    await Product.updateOne({_id}, {title,description,price,images,category,properties});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({_id:req.query?.id});
      res.json(true);
    }
  }
}