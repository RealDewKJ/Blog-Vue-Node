const db = require("../model");
const Post = db.post
const User = db.user

const seedData = [
    {
      title: 'Sample Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      specialContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      public: 1
    },
    {
      title: 'Sample Title 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      subContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      specialContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      public: 1
    },
  ];

exports.seed = async (req, res) => {
    try {
        await Post.bulkCreate(seedData);
        console.log('Seed data inserted successfully!');
      } catch (error) {
        console.error('Error seeding data:', error);
      } 
}


exports.getPosts = async (req,res) => {
    try {
        const post = await Post.findAll({
          include: [{
            model: User,
            required: true // Use required: true if you want to perform an INNER JOIN
        }],
        })
        res.send(post)
    } catch (err) {
        console.log('Error',err)
    }
}

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id,{
      include: [{
        model: User,
        required: true // Use required: true if you want to perform an INNER JOIN
    }],
    })
    if (post) res.send(post)
    else res.status(404).send({ message: 'Post not found' })
  } catch (err) {
    console.log('Error',err)
  }  
}

exports.createPost = async (req,res) => {
  console.log(req.body)
  try {
    const post = {
      title: req.body.title,
      content: req.body.content,
      subContent: req.body.subContent,
      specialContent: req.body.specialContent,
      public: 1,
      imageUrl: req.body.image,
      subImageUrl: req.body.subImage,
      userUserID: 1
    } 
    const newPost = await Post.create(post)
    await newPost.save()
    if (newPost) res.status(200).send({ message: 'Post created successfully' })
  } catch (err) {
    console.log('Error', err)
  }
}
