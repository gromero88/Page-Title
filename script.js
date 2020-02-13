$("button").click(function(){
    let name= $(".username").val();
    let bills= parseInt($(".UserBills").val());
    let needs= parseInt($(".UserNeeds").val());
    let fun= parseInt($(".UserFun").val());
    let total=(bills+needs+fun)*276;
    $("div").append(`<h2>Hello ${name}, I predict that by the year 2043, you will have spent at least ${total} dollars.</h2>`);
    $("img").show();
    });