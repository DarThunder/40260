(() => {
  var m = (n) => {
    let t = "<tr><th>Artist</th><th>Title</th></tr>";
    Array.from(n).forEach((e) => {
      let r = e.getElementsByTagName("ARTIST")[0]?.textContent || "N/A",
        o = e.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
      t += `<tr><td>${r}</td><td>${o}</td></tr>`;
    }),
      (document.getElementById("demo").innerHTML = t);
  };
})();
//# sourceMappingURL=myFunctionP02.js.map
