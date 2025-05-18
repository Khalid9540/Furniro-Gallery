<template>
  <div class="blog-card">
    <img :src="post.image" alt="Post image" class="blog-image w-100 my-3" />
    <div class="blog-content">
      <div class="blog-meta mb-3">
        <font-awesome-icon icon="fa-solid fa-user-tie" class="icon"/>
        <span>{{ post.author }}</span>
        <font-awesome-icon icon="fa-solid fa-calendar" class="icon"/>
        <span>{{ post.date }}</span>
        <font-awesome-icon icon="fa-solid fa-tag" class="icon"/>
        <span>{{ post.category }}</span>
      </div>
      <h2 class="blog-title mb-3">{{ post.title }}</h2>
      <p class="blog-excerpt">{{ post.excerpt }}</p>
      <a href="#" class="read-more text-decoration-underline">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: Object,
  },
};
</script>
<style scoped>
.blog-image {
  border-radius: 10px;
  height: 80vh;
}
h2{
    font-size: 30px;
}
p{
    color: #9F9F9F;
    font-size: 15px;
}
.icon,span{
    color: #9F9F9F;
}
span{
    margin-right: 2vw;
    margin-left: 1.5vh;
}
</style>
