<p>Given an integer <code>n</code> and an array <code>a</code> of length <code>n</code>, your task is to apply the following mutation to <code>a</code>:</p>
<ul>
<li>Array <code>a</code> mutates into a new array <code>b</code> of length <code>n</code>.</li>
<li>For each <code>i</code> from <code>0</code> to <code>n - 1</code>, <code>b[i] = a[i - 1] + a[i] + a[i + 1]</code>.</li>
<li>If some element in the sum <code>a[i - 1] + a[i] + a[i + 1]</code> does not exist, it should be set to <code>0</code>. For example, <code>b[0]</code> should be equal to <code>0 + a[0] + a[1]</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>n = 5</code> and <code>a = [4, 0, 1, -2, 3]</code>, the output should be <code>solution(n, a) = [4, 5, -1, 2, 1]</code>.</p>
<ul>
<li><code>b[0] = 0 + a[0] + a[1]    = 0 + 4 + 0    = 4</code></li>
<li><code>b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1    = 5</code></li>
<li><code>b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1</code></li>
<li><code>b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2</code></li>
<li><code>b[4] = a[3] + a[4] + 0    = (-2) + 3 + 0 = 1</code></li>
</ul>
<p>So, the resulting array after the mutation will be <code>[4, 5, -1, 2, 1]</code>.</p>
