$(document).ready(() => {
    $(document).on("click", ".meme", function() {
        window.location.href = `/search?id=${$(this).attr("alt")}&top=firsttext&bottom=secondtext`;
    });

    $(document).on("click", "#inputbtn", function() {
        console.log(`/search?id=${$("#memecaption").attr("alt")}&top=${$("#firsttext").val()}&bottom=${$("#secondtext").val()}`);
        window.location.href = `/search?id=${$("#memecaption").attr("alt")}&top=${$("#firsttext").val()}&bottom=${$("#secondtext").val()}`;
    });
});