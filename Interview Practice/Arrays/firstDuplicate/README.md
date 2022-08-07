<p>Given an array <code>a</code> that contains only numbers in the range from <code>1</code> to <code>a.length</code>, find the first duplicate <strong>number</strong> for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the <strong>number</strong> for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return <code>-1</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [2, 1, 3, 5, 3, 2]</code>, the output should be <code>solution(a) = 3</code>.</p>
<p>There are <code>2</code> duplicates: numbers <code>2</code> and <code>3</code>. The second occurrence of <code>3</code> has a smaller index than the second occurrence of <code>2</code> does, so the answer is <code>3</code>.</p>
</li>
<li>
<p>For <code>a = [2, 2]</code>, the output should be <code>solution(a) = 2</code>;</p>
</li>
<li>
<p>For <code>a = [2, 4, 3, 5, 1]</code>, the output should be <code>solution(a) = -1</code>.</p>
</li>
</ul>
