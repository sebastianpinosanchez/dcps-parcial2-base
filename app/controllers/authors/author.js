import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deletePost(post) {
      const deleteConfirmation = confirm("Are you sure to delete the post?");

      if (deleteConfirmation) {
        console.log("Lo puede eliminar");
        post.deleteRecord();
        post.save();
        this.get("model").posts.removeObject(post);
      }
    }
  }
});
