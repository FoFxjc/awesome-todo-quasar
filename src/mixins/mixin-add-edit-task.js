export default {
  methods: {
    submitForm() {
      if (!this.$refs.modelTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },

  components: {
    "model-header": require("components/Tasks/Models/Shared/ModelHeader")
      .default,
    "model-taskname": require("components/Tasks/Models/Shared/ModelTaskName")
      .default,
    "model-duedate": require("components/Tasks/Models/Shared/ModelDuedate")
      .default,
    "model-duetime": require("components/Tasks/Models/Shared/ModelDueTime")
      .default,
    "model-bottom": require("components/Tasks/Models/Shared/ModelBottom")
      .default
  }
};
