/* Redirect to Mobile*/

if (screen.width <= 699) {
  document.location = "https://m.thairlananjos.com";
}


// Dynamic Links will start with https://thairlananjos.com
"appAssociation": "AUTO",
"rewrites": [ { "source": "/**", "dynamicLinks": true } ]

/* Google Tag Manager */

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src =
    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PRMR4JZ');
