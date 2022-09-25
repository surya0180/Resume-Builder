export const exportResume = (resume) => {
  let dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(resume, null, 4));

  let a = document.getElementById("exportResume");
  a.href = dataStr;
};
