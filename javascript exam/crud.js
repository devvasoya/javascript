let studentrecode = [];

// show data 
function showdata() {
    let tbl = "";
    studentrecode.map((val, index) => {
        tbl += `
             <tr>
                <td>${+index}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td>${val.grade}</td>
                <td>
                <button onclick="deletstudent(${index})">Delet</button>
                <button onclick="editdata(${index})">Edit</button>
                </td>

            </tr>
    `
    });
    document.getElementById('tbody').innerHTML = tbl

}
showdata();

// add data 
function adddata() {

    let studentname = document.getElementById('studentname').value;
    let studentage = document.getElementById('studentage').value;
    let studentgrade = document.getElementById('studentgrade').value;

    let studentdata = {
        name: studentname,
        age: studentage,
        grade: studentgrade
    }
    console.log(studentdata);
    // if (studentdata.name == "" || studentdata.age == "" || studentdata.grade == "") {
    //     alert("please enter all fileds");
    // } else {
    //     studentrecode.push(studentdata);
    // }
    document.getElementById("studentname").value = "";
    document.getElementById("studentage").value = "";
    document.getElementById("studentgrade").value = "";

    studentrecode.push(studentdata);
    showdata();
}

// delet data 

function deletstudent(index) {
    studentrecode.splice(index, 1)
    console.log(index);

    showdata();
}

// edit data 

function editdata(i) {
    let updateRecode = studentrecode.find((val, index) => index == i);

    // console.log(updateRecode);

    document.getElementById("studentname").value = updateRecode.name;
    document.getElementById("studentage").value = updateRecode.age;
    document.getElementById("studentgrade").value = updateRecode.grade;
    showdata();
}

// update data 

let updatedata = (i) => {
    studentname = document.getElementById("studentname").value;
    studentage = document.getElementById("studentage").value;
    studentgrade = document.getElementById("studentgrade").value;

    let updateData = studentrecode.map((val, index) => {
        if (index == i) {
            val.name = studentname;
            val.age = studentage;
            val.grade = studentgrade;
        }  
    });
    studentrecode = updateData;
    showdata();
}
