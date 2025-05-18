<template>
  <div class="blog-list">
    <BlogCard v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import img1 from "../assets/imgs/56f76fe241417cd682c30a19eecaf20a549cee89.jpg";
import img2 from "../assets/imgs/d248030196ed5dc3b3d01cf6cd369ef7aff2f296.jpg";
import img3 from "../assets/imgs/8dee6dec4190307dc6c7273c0bbf5086605997e4.jpg";

export default {
  name: "BlogList",
  components: {
    BlogCard,
  },
  data() {
    return {
      posts: [
        {
          image: img1,
          author: "Admin",
          date: "10 Oct 2022",
          category: "Wood",
          title: "Going all-in with millennial design",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        },
        {
          image: img2,
          author: "Admin",
          date: "10 Oct 2022",
          category: "Handmade",
          title: "Going all-in with millennial design",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        },
        {
          image: img3,
          author: "Admin",
          date: "10 Oct 2022",
          category: "Wood",
          title: "Going all-in with millennial design",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        },
      ],
    };
  },
};
</script>
