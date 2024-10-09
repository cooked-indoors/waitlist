import prisma from "@/lib/prismadb"


export default async function POST(
  req, res
) {
  const {email} = req.body;
  let user = await prisma.user.findUnique({
    where: {email}
  })
  if (user){
      return res.status(400).json({message: "Email already waitlisted"});
    }
    try{
        user = await prisma.user.create({
        data: {
          email,
        }
      });
      return res.status(200).json(user);
  }catch(err){
    return res.status(500).json({message: "Server error, please try again"});
  }
}
