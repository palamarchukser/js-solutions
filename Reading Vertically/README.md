<p>You are given an array of strings <code>arr</code>. Your task is to construct a string from the words in <code>arr</code>, starting with the <code>0<sup>th</sup></code> character from each word (in the order they appear in <code>arr</code>), followed by the <code>1<sup>st</sup></code> character, then the <code>2<sup>nd</sup></code> character, etc. If one of the words doesn't have an <code>i<sup>th</sup></code> character, skip that word.</p>
<p>Return the resulting string.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>arr = ["Daisy", "Rose", "Hyacinth", "Poppy"]</code>, the output should be <code>solution(arr) = "DRHPaoyoisapsecpyiynth"</code>.</p>
<ul>
<li>First, we append all <code>0<sup>th</sup></code> characters and obtain string <code>"DRHP"</code>;</li>
<li>Then we append all <code>1<sup>st</sup></code> characters and obtain string <code>"DRHPaoyo"</code>;</li>
<li>Then we append all <code>2<sup>nd</sup></code> characters and obtain string <code>"DRHPaoyoisap"</code>;</li>
<li>Then we append all <code>3<sup>rd</sup></code> characters and obtain string <code>"DRHPaoyoisapaecp"</code>;</li>
<li>Then we append all <code>4<sup>th</sup></code> characters and obtain string <code>"DRHPaoyoisapaecpyiy"</code>;</li>
<li>Finally, only letters in the <code>arr[2]</code> are left, so we append the rest characters and get <code>"DRHPaoyoisapaecpyiynth"</code>;</li>
</ul>
<p><img src="https://github.com/palamarchukser/js-solutions/raw/master/static/readingVertically.gif" alt="readingVertically"></p>
</li>
<li>
<p>For <code>arr = ["E", "M", "I", "L", "Y"]</code>, the output should be <code>solution(arr) = "EMILY"</code>.</p>
<p>Since each of these strings have only one character, the answer will be concatenation of each string in order, so the answer is <code>EMILY</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string arr</strong></p>
<p>An array of strings containing alphanumeric characters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ arr.length ≤ 100</code>,<br>
<code>1 ≤ arr[i].length ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>Return the resulting string.</p>
</li>
</ul>
