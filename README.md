# html5smeq
Subjective Mental Effort Questionnaire (SMEQ) slider that works on HTML 5 mobile browsers.

The SMEQ is a usability scale that was first proposed in the Netherlands by Zijlstra et al (1985), and which has seen extensive use and validation since then. A more recent comparison with other usability metrics was carried out by Sauro and Dumas (2009).

This version is a modern reimplementation of earlier Flash code shown at https://measuringu.com/interval-ordinal/. It is designed to work both with a mouse and with touchscreens.

## How to use
[`demo.html`](demo.html) contains a simple sample.

To use the SMEQ in your own code, simply load JQuery into your page, and include the [`js/html5smeq.js`](js/html5smeq.js) script and the [`css/html5smeq.css`](css/html5smeq.css) stylesheet. Create an empty `<div>` element and call `initSMEQ()` with it as an argument.

**Important:** This `<div>` element should have a height set for best results, ideally one which is related to viewport height.

## Limitations
This version is not accessible to screenreaders. To make it accessible, it is not enough just to add the appropriate WAI-ARIA scaffolding. It also would need to undergo psychometric validation. You may want to consider using the Single Ease Question instead, which is a simple seven-point scale (Sauro & Dumas 2009) - https://measuringu.com/single-question/.

## References
- Sauro, J., & Dumas, J. S. (2009, April). Comparison of three one-question, post-task usability questionnaires. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 1599-1608). ACM.
- Zijlstra, F. R. H., & Doorn, L. V. (1985). The construction of a scale to measure subjective effort. Delft, Netherlands, 43.
