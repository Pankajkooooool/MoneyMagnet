import UserData from "../models/UserData.js";
import User from "../models/User.js";

/* CREATE */
export const createUserData = async (req, res) => {
  try {
    const { userId, salary,needs,wants,savings } = req.body;
    // const user = await User.findById(userId);
    const newPost = new UserData({
      userId,
      salary,
      needs,
      wants,
      savings,  
    });
    await newPost.save();

    const userData = await UserData.find();
    res.status(201).json(userData);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// /* READ */
// export const getFeedPosts = async (req, res) => {
//   try {
//     const post = await Post.find();
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await UserData.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const updatedPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await UserData.findById(id);

    const updatedPost = await UserData.findByIdAndUpdate(
      id,
      { savings:post.savings },
      { wants:post.needs },
      { needs:post.needs },
      { salary:post.salary },
    
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
