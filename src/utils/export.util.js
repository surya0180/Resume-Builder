export const exportResume = (resume) => {
  console.log(resume);
  let dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(resume, null, 4));

  let a = document.getElementById("exportResume");
  console.log(a);
  a.href = dataStr;
};
