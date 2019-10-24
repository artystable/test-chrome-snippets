/**
 * Summary: Change GitHub header to custom color.
 * Description: This function takes a CSS color property value as input and applies it to the header element at https://github.com.
 * 
 * @link https://github.com
 * @param {string}   [color='#24292e'] CSS input color that will be assigned to GitHub header element after function run.
 * @return {null} Returns null after function run.
 */
function GitHubHeaderBrushStroke(color = '#279f43') {
    document.querySelector('header').style.cssText = `background-color: ${color};`;
    return null;
}
GitHubHeaderBrushStroke('green')
