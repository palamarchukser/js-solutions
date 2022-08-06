<p>Let's say a triple <code>(a, b, c)</code> is a <em>zigzag</em> if either <code>a &lt; b &gt; c</code> or <code>a &gt; b &lt; c</code>.</p>
<p>Given an array of integers <code>numbers</code>, your task is to check all the triples of its consecutive elements for being a <em>zigzag</em>. More formally, your task is to construct an array of length <code>numbers.length - 2</code>, where the <code>i<sup>th</sup></code> element of the output array equals <code>1</code> if the triple <code>(numbers[i], numbers[i + 1], numbers[i + 2])</code> is a <em>zigzag</em>, and <code>0</code> otherwise.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>numbers = [1, 2, 1, 3, 4]</code>, the output should be <code>solution(numbers) = [1, 1, 0]</code>.</p>
<ul>
<li><code>(numbers[0], numbers[1], numbers[2]) = (1, 2, 1)</code> <strong>is</strong> a <em>zigzag</em>, because <code>1 &lt; 2 &gt; 1</code>;</li>
<li><code>(numbers[1], numbers[2] , numbers[3]) = (2, 1, 3)</code> <strong>is</strong> a <em>zigzag</em>, because <code>2 &gt; 1 &lt; 3</code>;</li>
<li><code>(numbers[2], numbers[3] , numbers[4]) = (1, 3, 4)</code> <strong>is not</strong> a <em>zigzag</em>, because <code>1 &lt; 3 &lt; 4</code>;</li>
</ul>
</li>
<li>
<p>For <code>numbers = [1, 2, 3, 4]</code>, the output should be <code>solution(numbers) = [0, 0]</code>;</p>
<p>Since all the elements of <code>numbers</code> are increasing, there are no <em>zigzags</em>.</p>
</li>
<li>
<p>For <code>numbers = [1000000000, 1000000000, 1000000000]</code>, the output should be <code>solution(numbers) = [0]</code>.</p>
<p>Since all the elements of <code>numbers</code> are the same, there are no <em>zigzags</em>.</p>
</li>
</ul>
