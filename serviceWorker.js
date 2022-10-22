/* const almofrredon = "Almofrredon-site", assets = ["/", "/index", "index", "/style.css", "/js/app.js", "../js/main.js", "/js/main2.js", "/credits", "/adkarf/adkar", "/adkarf/morning.html", "/adkarf/evening", "/adkarf/food", "/adkarf/sleep", "/adkarf/adkarsalah", "/adkarf/tsabeeh", "/adkarf/sunah", "/quranf/quran", "/quranf/1", "../quranf/2", "/quranf/3", "/quranf/4", "/quranf/5", "/quranf/6", "/quranf/7", "/prayf/adkarsalah", "/prayf/arkansalah", "/prayf/hpray", "/prayf/mpray", "/prayf/npray", "/prayf/sunp", "/prayf/wdow", "/eidf/arfa", "/eidf/eid-congrats", "/eidf/eidsunn", "/eidf/zkah", "/kidsf/almofred"];  */


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}
// This code executes in its own worker or thread
this.addEventListener('fetch', function (event) {
  // it can be empty if you just want to get rid of that error
});

self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
    try {
      var res = await fetch(event.request);
      var cache = await caches.open('cache');
      cache.put(event.request.url, res.clone());
      return res;
    }
    catch (error) {
      return caches.match(event.request);
    }
  }());

});
