<p>You are given an array of integers <code>a</code> and an integer <code>k</code>. Your task is to calculate the number of ways to pick two different indices <code>i &lt; j</code>, such that <code>a[i] + a[j]</code> is divisible by <code>k</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [1, 2, 3, 4, 5]</code> and <code>k = 3</code>, the output should be <code>solution(a, k) = 4</code>.</p>
<p>There are <code>4</code> pairs of numbers that sum to a multiple of <code>k = 3</code>:</p>
<ul>
<li><code>a[0] + a[1] = 1 + 2 = 3</code></li>
<li><code>a[0] + a[4] = 1 + 5 = 6</code></li>
<li><code>a[1] + a[3] = 2 + 4 = 6</code></li>
<li><code>a[3] + a[4] = 4 + 5 = 9</code></li>
</ul>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>An array of integers from which two numbers should be picked. The elements are not necessarily all unique.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 10<sup>5</sup></code>,<br>
<code>1 ≤ a[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>An integer, which should be a divisor of the sum.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer64</strong></p>
<p>The number of ways to pick two different numbers from <code>a</code>, such that their sum is divisible by <code>k</code>.</p>
</li>
</ul>
