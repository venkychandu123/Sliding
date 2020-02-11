// $(document).ready(function () {
//     var min = 0, max = 4;
//     $.each($(".something").children(), function (index, value) {
//         if (index >= min && index <= max) {
//             $(this).removeClass("sr");
//         } else {
//             $(this).addClass("sr");
//         }
//     });

// })

// function nextSlide(productId, min = 0, max = 4) {
//     if (max < $('.' + productId).children().length - 1) {
//         min = min + 1, max = max + 1;
//         min >= 1 ? $('.' + productId).prev().children().removeAttr("disabled") : "";
//         $.each($('.' + productId).children(), function (index) {
//             if (index >= min && index <= max) {
//                 $(this).removeClass("sr");
//             } else {
//                 $(this).addClass("sr");
//             }
//         });
//         $('.' + productId).next().empty().append("<button class='hi' onclick=nextSlide('" + productId + "'," + min + "," + max + ")>next</button>");
//         $('.' + productId).prev().empty().append("<button class='hi' onclick=prevSlide('" + productId + "'," + min + "," + max + ")>prev</button>");
//         max == $('.' + productId).children().length - 1 ? $('.' + productId).next().children().attr("disabled", "disabled") : "";
//     } else {
//         $('.' + productId).next().children().attr("disabled", "disabled");
//     }

// }


// function prevSlide(productId, min, max) {
//     if (min > 0) {
//         min = min - 1, max = max - 1;
//         //max > $('.' + productId).children().length - 1 ? $('.' + productId).next().children().removeAttr("disabled") : "";
//         $.each($('.' + productId).children(), function (index) {
//             if (index >= min && index <= max) {
//                 $(this).removeClass("sr");
//             } else {
//                 $(this).addClass("sr");
//             }
//         });
//         $('.' + productId).next().empty().append("<button class='hi' onclick=nextSlide('" + productId + "'," + min + "," + max + ")>next</button>");
//         $('.' + productId).prev().empty().append("<button class='hi' onclick=prevSlide('" + productId + "'," + min + "," + max + ")>prev</button>");
//         min == 0 ? $('.' + productId).prev().children().attr("disabled", "disabled") : "";
//     } else {
//         $('.' + productId).prev().children().attr("disabled", "disabled");
//     }

// }

$(document).ready(function () {
    var min = 0, max = 4;
    $.each($(".something").children(), function (index, value) {
        if (index >= min && index <= max) {
            $(this).removeClass("sr");
        } else {
            $(this).addClass("sr");
        }
    });

})

function nextSlide(productId, min = 0, max = 4) {
    if (max < $('.' + productId).children().length - 1) {
        min = min + 1, max = max + 1;
        min >= 1 ? $('.' + productId).prev().children().removeAttr("disabled") : "";
        $.each($('.' + productId).children(), function (index) {
            if (index >= min && index <= max) {
                $(this).removeClass("sr");
            } else {
                $(this).addClass("sr");
            }
        });
        $('.' + productId).next().empty().append("<button class='hi' onclick=nextSlide('" + productId + "'," + min + "," + max + ")>next</button>");
        $('.' + productId).prev().empty().append("<button class='hi' onclick=prevSlide('" + productId + "'," + min + "," + max + ")>prev</button>");
        max == $('.' + productId).children().length - 1 ? $('.' + productId).next().children().attr("disabled", "disabled") : "";
    } else {
        $('.' + productId).next().children().attr("disabled", "disabled");
    }

}


function prevSlide(productId, min, max) {
    if (min > 0) {
        min = min - 1, max = max - 1;
        //max > $('.' + productId).children().length - 1 ? $('.' + productId).next().children().removeAttr("disabled") : "";
        $.each($('.' + productId).children(), function (index) {
            if (index >= min && index <= max) {
                $(this).removeClass("sr");
            } else {
                $(this).addClass("sr");
            }
        });
        $('.' + productId).next().empty().append("<button class='hi' onclick=nextSlide('" + productId + "'," + min + "," + max + ")>next</button>");
        $('.' + productId).prev().empty().append("<button class='hi' onclick=prevSlide('" + productId + "'," + min + "," + max + ")>prev</button>");
        min == 0 ? $('.' + productId).prev().children().attr("disabled", "disabled") : "";
    } else {
        $('.' + productId).prev().children().attr("disabled", "disabled");
    }

}









