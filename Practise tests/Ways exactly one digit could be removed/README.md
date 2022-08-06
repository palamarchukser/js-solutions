<p>Given two strings <code>s</code> and <code>t</code>, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one <strong>digit</strong> could be removed from one of the strings so that <code>s</code> is 
<b>lexicographically smaller</b> than <code>t</code> after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (eg: removing <code>1</code> from the string <code>a11b1c</code> could result in <code>a1b1c</code> or <code>a11bc</code>, but not <code>abc</code>).</p>
<p>Also note that digits are considered lexicographically smaller than letters.</p>
<p><span class="" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>s = "ab12c"</code> and <code>t = "1zz456"</code>, the output should be <code>solution(s, t) = 1</code>.</p>
<p>Here are all the possible removals:</p>
<ul>
<li>We can remove the first digit from <code>s</code>, obtaining <code>"ab2c"</code>. <code>"ab2c" &gt; "1zz456"</code>, so we don't count this removal</li>
<li>We can remove the second digit from <code>s</code>, obtaining <code>"ab1c"</code>. <code>"ab1c" &gt; "1zz456"</code>, so we don't count this removal</li>
<li>We can remove the first digit from <code>t</code>, obtaining <code>"zz456"</code>. <code>"ab12c" &lt; "zz456"</code>, so we count this removal</li>
<li>We can remove the second digit from <code>t</code>, obtaining <code>"1zz56"</code>. <code>"ab12c" &gt; "1zz56"</code>, so we don't count this removal</li>
<li>We can remove the third digit from <code>t</code>, obtaining <code>"1zz46"</code>. <code>"ab12c" &gt; "1zz46"</code>, so we don't count this removal</li>
<li>We can remove the fourth digit from <code>t</code>, obtaining <code>"1zz45"</code>. <code>"ab12c" &gt; "1zz45"</code>, so we don't count this removal</li>
</ul>
<p>The only valid case where <code>s &lt; t</code> after removing a digit is <code>"ab12c" &lt; "zz456"</code>. Therefore, the answer is <code>1</code>.</p>
</li>
<li>
<p>For <code>s = "ab12c"</code> and <code>t = "ab24z"</code>, the output should be <code>solution(s, t) = 3</code>.</p>
<p>There are 4 possible ways of removing the digit:</p>
<ul>
<li><code>"ab1c" &lt; "ab24z"</code></li>
<li><code>"ab2c" &gt; "ab24z"</code></li>
<li><code>"ab12c" &lt; "ab4z"</code></li>
<li><code>"ab12c" &lt; "ab2z"</code></li>
</ul>
<p>Three of these cases match the requirement that <code>s &lt; t</code>, so the answer is <code>3</code>.</p>
</li>
</ul>
