/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */

const apiBaseURL= "http://localhost:5000/api/bookmarks";
const accountBaseURL= "http://localhost:5000/accounts";
//const apiBaseURL= "https://blushing-imaginary-streetcar.glitch.me/api/bookmarks";

function webAPI_GET_ALL(queryString, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + queryString,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GET( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_POST( data , token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_POST - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUT(data, token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + data.Id,
        type: 'PUT',
        contentType:'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}

function webAPI_DELETE( id, token, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}

/*---------------------------------------------------------------------------------------*/

function accountAPI_LOGIN(email, password, successCallBack, successCallBackToken, errorCallBack) {
    var data = { Email: email, Password: password };
    $.ajax({
        url: "http://localhost:5000/token",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack(); successCallBackToken(data.Access_token);  console.log("webAPI_LOGIN - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_LOGIN - error");
        }
    });
}

function accountAPI_REGISTER(name, email, password, successCallBack, errorCallBack) {
    var data = { Id: 0, Name: name, Email: email, Password: password };
    console.log("data", data);
    $.ajax({
        url: accountBaseURL + "/" + "register",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_REGISTER - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_REGISTER - error");
        }
    });
}

function accountAPI_GET(successCallBack, errorCallBack) {
    $.ajax({
        url: accountBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}
function accountAPI_CHANGE(id, name, email, password, token, successCallBack, errorCallBack) {
    var data = { Id: id, Name: name, Email: email, Password: password, Created: 0 };
    console.log("data", data);
    $.ajax({
        url: accountBaseURL + "/change",
        type: 'PUT',
        contentType:'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_CHANGE - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_CHANGE - error");
        }
    });
}

function accountAPI_DELETE( id, token, successCallBack, errorCallBack) {
    $.ajax({
        url: accountBaseURL+"/" + id,
        contentType:'text/plain',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}