<p>You are given an array of integers <code>numbers</code> and two integers 
<code>left</code> and <code>right</code>. 
You task is to calculate a boolean array <code>result</code>, where <code>result[i] = true</code> if there exists an integer <code>x</code>, such that <code>numbers[i] = (i + 1) * x</code> and <code>left ≤ x ≤ right</code>. Otherwise, <code>result[i]</code> should be set to <code>false</code>.</p>
<p><span style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>numbers = [8, 5, 6, 16, 5]</code>, <code>left = 1</code>, and <code>right = 3</code>, the output should be <code>solution(numbers, left, right) = [false, false, true, false, true]</code>.</p>
<ul>
<li>For <code>numbers[0] = 8</code>, we need to find a value of <code>x</code> such that <code>1 * x = 8</code>, but the only value that would work is <code>x = 8</code> which doesn't satisfy the boundaries <code>1 ≤ x ≤ 3</code>, so <code>result[0] = false</code>.</li>
<li>For <code>numbers[1] = 5</code>, we need to find a value of <code>x</code> such that <code>2 * x = 5</code>, but there is no integer value that would satisfy this equation, so <code>result[1] = false</code>.</li>
<li>For <code>numbers[2] = 6</code>, we can choose <code>x = 2</code> because <code>3 * 2 = 6</code> and <code>1 ≤ 2 ≤ 3</code>, so <code>result[2] = true</code>.</li>
<li>For <code>numbers[3] = 16</code>, there is no an integer <code>1 ≤ x ≤ 3</code>, such that <code>4 * x = 16</code>, so <code>result[3] = false</code>.</li>
<li>For <code>numbers[4] = 5</code>, we can choose <code>x = 1</code> because <code>5 * 1 = 5</code> and <code>1 ≤ 1 ≤ 3</code>, so <code>result[4] = true</code>.</li>
</ul>
