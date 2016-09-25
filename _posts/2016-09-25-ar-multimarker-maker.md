---
layout: post
title:  "Added Multimarker Maker"
date:   2016-09-25 14:00:00 -0500
categories: augmented-reality marker multimarker AR ARToolkit changelog
---

Added web based [multimarker creator][multimarkermaker] utility for crafting and exporting multimarkers
composed of [ARToolkit][ar-toolkit]-compatible barcode markers.

[Multimarkers][ar-toolkit-multi] are a specific arrangement of pre-existing
markers (like [barcode markers][barcodes]) that can be used as an augmented
reality marker that is more fault tolerant than a single marker alone. Only
one of the markers in the set needs to be visible to register.

This is a fully browser-based JavaScript solution and (very) limited testing shows it works 
on mobile devices too. It's a very early release but I intend
to update the [page][multimarkermaker] as the source, available on the
[Github project page][multimarkergithub], evolves to include more features.

[multimarkermaker]: {{ site.github.url }}/multimarker-maker
[multimarkergithub]: https://github.com/squaretone/multimarker-maker
[ar-toolkit]: https://artoolkit.org/
[ar-toolkit-multi]: https://artoolkit.org/documentation/doku.php?id=3_Marker_Training:marker_multi
[barcodes]: {{ site.github.url }}/barcode
