// ==UserScript==
// @name         DaypoAnswers
// @namespace    https://github.com/ByFindIt152/DaypoHack/
// @version      2024-02-13
// @description  This scripts gives u the answer of any daypo test
// @author       ByFindIt
// @match        https://www.daypo.com/*.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=daypo.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...

  const url = document.URL;

  fetch("https://www.daypo.com/asps/load.php", {
    headers: {
      accept: "*/*",
      "accept-language":
        "es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua":
        '"Not A(Brand";v="99", "Microsoft Edge";v="121", "Chromium";v="121"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-kl-saas-ajax-request": "Ajax_Request",
    },
    referrer: `${url}`,
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `tes=${ntest}`,
    method: "POST",
    mode: "cors",
    credentials: "omit",
  })
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      data.getElementsByTagName("c")[1].childNodes;
      for (const c of data.getElementsByTagName("c")[1].childNodes) {
        console.log(
          `%c ${c
            .getElementsByTagName("p")[0]
            .innerHTML.replace(/^\s+|\s+$/gm, "")
            .trim()}`,
          "font-family:poppins;color:yellow;font-size:24px;font-border:2px;"
        );
        let resp = c
          .getElementsByTagName("c")[0]
          .innerHTML.replace(/^\s+|\s+$/gm, "")
          .trim()
          .indexOf("2");
        //for (const o of c.getElementsByTagName("r")[0].childNodes){
        //    console.log(o.innerHTML)
        //}
        console.log(
          `%c ${c.getElementsByTagName("r")[0].childNodes[resp].innerHTML}`,
          "font-family:poppins;color:lightblue;font-size:20px;font-border:4px;"
        );
      }
    });
    console.log("De nada ;)")
})();
