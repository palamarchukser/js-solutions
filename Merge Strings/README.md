<p>You are implementing your own programming language and you've decided to add support 
for merging strings. A typical <code>merge</code> function would take two strings 
<code>s1</code> and <code>s2</code>, and return the 
<b>lexicographically smallest</b> result that can be obtained by placing the symbols of <code>s2</code> between the symbols of <code>s1</code> in such a way that maintains the relative order of the characters in each string.</p>
<p>For example, if <code>s1 = "super"</code> and <code>s2 = "tower"</code>, 
the result should be <code>merge(s1, s2) = "stouperwer"</code>.</p>
<p><img src="https://github.com/palamarchukser/js-solutions/raw/master/static/mergeStrings2.png" alt="mergeStrings2"></p>
<p>You'd like to make your language more unique, so for your <code>merge</code> function, instead of comparing the characters 
in the usual lexicographical order, you'll compare them based on how many times they occur in their respective initial strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual lexicographical way. If both number of occurences and characters are equal, you should take the characters from the first string to the result. Note that occurrences in the initial strings are compared - they do not change over the merge process.</p>
<p>Given two strings <code>s1</code> and <code>s2</code>, return the result of the special <code>merge</code> function you are implementing.</p>
<p><span style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>s1 = "dce"</code> and <code>s2 = "cccbd"</code>, the output should be<br>
<code>solution(s1, s2) = "dcecccbd"</code>.</li>
</ul>
<p>All symbols from <code>s1</code> goes first, because all of them have only <code>1</code> occurrence in <code>s1</code> and <code>c</code> has <code>3</code> occurrences in <code>s2</code>.</p>
<p><img src="https://github.com/palamarchukser/js-solutions/raw/master/static/mergeStrings.jpg" alt="mergeStrings"></p>
<ul>
<li>For <code>s1 = "super"</code> and <code>s2 = "tower"</code>, the output should be<br>
<code>solution(s1, s2) = "stouperwer"</code>.</li>
</ul>
<p>Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.</p>
