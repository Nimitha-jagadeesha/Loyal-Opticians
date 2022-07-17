function ajaxliginmob() {
    // alert("Hi2");
    jQuery("html").removeClass("nav-before-open");
    jQuery("html").removeClass("nav-open");

    setTimeout(() => {
        jQuery("#myModal1").show();
    }, 100);
}
var myVar = setInterval(myTimer, 500);
var buttonContainer = '';

function myTimer() {
    var nextButtonDiv = document.getElementById("shipping-method-buttons-container");
    if (typeof (nextButtonDiv) != 'undefined' && nextButtonDiv != null) {
        nextButtonDiv.innerHTML = '<div class="primary"><button onClick="checkServicablePincode()" type="button" class="button action continue primary"><span>Next</span></button></div>';
        //var checkout = document.getElementsByClassName("checkout");
        var pincodeObj = document.getElementsByName("postcode");
        if (typeof (pincodeObj[0]) != 'undefined' && pincodeObj[0] != null) {
            pincodeObj = document.getElementsByName("postcode")[0];
            pincodeObj.onblur = function () {
                checkServicablePincode();
            };
            var checkout = document.getElementsByClassName("checkout");
            for (var i = 0; i < checkout.length; i++) {
                if (typeof (checkout[i]) != 'undefined' && checkout[i] != null) {
                    checkout[i].setAttribute("disabled", "disabled");
                    //clearInterval(myVar);
                }
            }
            clearInterval(myVar);
        }
        //clearInterval(myVar);
    }

}

function checkServicablePincode() {
    var pincode = "";
    pincodeObj = document.getElementsByName("postcode");
    if (typeof (pincodeObj[0]) != 'undefined' && pincodeObj[0] != null) {
        pincode = document.getElementsByName("postcode")[0].value;
    }
    if (pincode != "" || pincode != null) {
        var url = "https://www.gkboptical.com/serviceablepincode/index/checkorderpincode";
        jQuery.ajax({
            url: url,
            type: "POST",
            data: {
                pincode: pincode
            },
            success: function (result) {

                var r_data = result.split("~");

                if (r_data[1]) {

                    jQuery('input[name="city"]').val(r_data[1]).trigger("change");

                    // jQuery('input[name="city"]').val(r_data[1]);
                    //document.getElementsByName("city").value = r_data[1];
                    //  jQuery('input[name="city"]').trigger("focusout");

                }


                if (parseInt(r_data[0]) == 1) {
                    var checkout = document.getElementsByClassName("checkout");
                    for (var i = 0; i < checkout.length; i++) {
                        if (typeof (checkout[i]) != 'undefined' && checkout[i] != null) {
                            jQuery('.checkout').prop('disabled', false);
                        }
                    }
                    //------------------------------
                    var nextButtonDiv = document.getElementById("shipping-method-buttons-container");
                    if (typeof (nextButtonDiv) != 'undefined' && nextButtonDiv != null) {
                        nextButtonDiv.innerHTML = '<div class="primary"><button data-role="opc-continue" type="submit" class="button action continue primary"><span data-bind="i18n: Next">Next</span></button></div>';
                    }
                    //------------------------------
                } else {
                    var checkout = document.getElementsByClassName("checkout");
                    for (var i = 0; i < checkout.length; i++) {
                        if (typeof (checkout[i]) != 'undefined' && checkout[i] != null) {
                            checkout[i].setAttribute("disabled", "disabled");
                        }
                    }
                    var nextButtonDiv = document.getElementById("shipping-method-buttons-container");
                    if (typeof (nextButtonDiv) != 'undefined' && nextButtonDiv != null) {
                        nextButtonDiv.innerHTML = '<div class="primary"><button onClick="checkServicablePincode()" type="button" class="button action continue primary"><span>Next</span></button></div>';
                    }
                    alert("Sorry! Delivery Not Available");
                }
            }
        });
    }
}
var flatRate = 0;
var myVarFlatRateTableTimer = setInterval(flatRateTableTimer, 500);
function flatRateTableTimer() {
    var tableObj = document.getElementsByClassName("table-checkout-shipping-method");
    if (typeof (tableObj[0]) != 'undefined' && tableObj[0] != null) {
        flatRate = parseInt((tableObj[0].rows[2].cells.length));
        if (flatRate >= 1) {
            tableObj[0].deleteRow(2);
        }
        clearInterval(myVarFlatRateTableTimer);

    }
}
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-131344494-1');
window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'AW-598476150');
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K2SFXMC');
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '249145339934973');
fbq('track', 'PageView');