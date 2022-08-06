<p>You are given a string <code>s</code>. Your task is to count the number of ways of splitting <code>s</code> into three non-empty parts <code>a</code>, <code>b</code> and <code>c</code> (<code>s = a + b + c</code>) in such a way that <code>a + b</code>, <code>b + c</code> and <code>c + a</code> are all different strings.</p>
<p><strong>NOTE:</strong> <code>+</code> refers to string concatenation.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>s = "xzxzx"</code>, the output should be <code>solution(s) = 5</code>.</p>
<p>Consider all the ways to split <code>s</code> into three non-empty parts:</p>
<ul>
<li>If <code>a = "x"</code>, <code>b = "z"</code> and <code>c = "xzx"</code>, then all <code>a + b = "xz"</code>, <code>b + c = "zxzx"</code> and <code>c + a = xzxx</code> are different.</li>
<li>If <code>a = "x"</code>, <code>b = "zx"</code> and <code>c = "zx"</code>, then all <code>a + b = "xzx"</code>, <code>b + c = "zxzx"</code> and <code>c + a = zxx</code> are different.</li>
<li>If <code>a = "x"</code>, <code>b = "zxz"</code> and <code>c = "x"</code>, then all <code>a + b = "xzxz"</code>, <code>b + c = "zxzx"</code> and <code>c + a = xx</code> are different.</li>
<li>If <code>a = "xz"</code>, <code>b = "x"</code> and <code>c = "zx"</code>,  then <code>a + b = b + c = "xzx"</code>. Hence, this split is not counted.</li>
<li>If <code>a = "xz"</code>, <code>b = "xz"</code> and <code>c = "x"</code>, then all <code>a + b = "xzxz"</code>, <code>b + c = "xzx"</code> and <code>c + a = xxz</code> are different.</li>
<li>If <code>a = "xzx"</code>, <code>b = "z"</code> and <code>c = "x"</code>, then all <code>a + b = "xzxz"</code>, <code>b + c = "zx"</code> and <code>c + a = xxzx</code> are different.</li>
</ul>
<p>Since there are five valid ways to split <code>s</code>, the answer is <code>5</code>.</p>

