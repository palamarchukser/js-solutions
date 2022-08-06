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
