const link = `https://636b6df9ad62451f9fb14be5.mockapi.io/api/v1/tasks`;

const getAllTasks = async () => {
  const res = await fetch(link);
  const data = await res.json();
  return data;
};

const createNewTask = async (taskObj) => {
  const res = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  });
  return res.ok && res.json();
};

const updateStatusOfExistingTask = async (id, updatedTask) => {
  const res = await fetch(`${link}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  return res.ok && res.json();
};

const deleteDeprecatedTask = async (id) => {
  const res = await fetch(`${link}/${id}`, {
    method: "DELETE",
  });
  return res.ok && res.json();
};

export {
  getAllTasks,
  createNewTask,
  updateStatusOfExistingTask,
  deleteDeprecatedTask,
};
