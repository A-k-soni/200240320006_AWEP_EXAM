function read() {


    if (document.querySelector("#user").value == "" || document.querySelector("#pass").value == "" || document.querySelector("#mail").value == "") {
        alert("please fill all the required area");


    }


    else {



        var names = document.querySelector("#user").value;
        var pas = document.querySelector("#pass").value;
        var eml = document.querySelector("#mail").value;


        var show = document.querySelector("#displaydetyails").cloneNode(true);
        show.style.visibility = "visible";
        show.children[0].innerHTML = "USERNAME :" + names;
        show.children[1].innerHTML = "PASSWORD  :" + pas;
        show.children[2].innerHTML = "EMAIL           :" + eml;

        var area = document.querySelector("#displayblock");
        area.insertBefore(show, area.firstChild);


        document.querySelector("#user").value = "";
        document.querySelector("#pass").value = "";
        document.querySelector("#mail").value = "";

    }

}
