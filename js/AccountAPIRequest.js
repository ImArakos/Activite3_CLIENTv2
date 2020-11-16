/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */

//const apiBaseURL= "http://localhost:5000/accounts";
//const apiBaseURL= "https://blushing-imaginary-streetcar.glitch.me/api/bookmarks";

function accountAPI_LOGIN(email, password, successCallBack, errorCallBack) {
    var data = { Email: email, Password: password };
    $.ajax({
        url: "http://localhost:5000/token",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_LOGIN - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_LOGIN - error");
        }
    });
}

function accountAPI_REGISTER(name, email, password, successCallBack, errorCallBack) {
    var data = { Name: name, Email: email, Password: password };
    $.ajax({
        url: apiBaseURL + "/" + "register",
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
        url: apiBaseURL,
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
function accountAPI_CHANGE(id, name, email, password, successCallBack, errorCallBack) {
    var data = { Id: id, Name: name, Email: email, Password: password };
    $.ajax({
        url: apiBaseURL + "/" + data.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_CHANGE - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_CHANGE - error");
        }
    });
}

function accountAPI_DELETE( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}
