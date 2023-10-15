let data=[]

function save(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let age=document.getElementById('age').value;
    let role=document.getElementById('role').value;
    let comment=document.getElementById('comment').value;
    document.getElementById('popup').style.display='block';
    data = [
        {
            'name':name,
            'email':email,
            'age':age,
            'role':role,
            'comment':comment
        }
    ]
    console.log(data);
}
function success(){
    document.getElementById('popup').style.display='none';
}