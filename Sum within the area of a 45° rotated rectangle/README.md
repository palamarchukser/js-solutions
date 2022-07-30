<p>Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the 
<b>main diagonal</b> and two diagonals parallel to the 
<b>secondary diagonal</b>. 
The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.</p>
<p><img alt="dimensions" src="https://github.com/palamarchukser/js-solutions/raw/master/static/dimensions.gif"></p>
<p>Given integers <code>a</code> and <code>b</code> representing the dimensions of the rotated rectangle, and <code>matrix</code> (a matrix of integers), your task is to find the greatest sum of integers contained within an <code>a x b</code> rotated rectangle.</p>
<p><strong>Note:</strong> The order of the dimensions is not important - consider all <code>a x b</code> and <code>b x a</code> rectangles.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>matrix = [[1, 2, 3, 4, 0],
          [5, 6, 7, 8, 1],
          [3, 2, 4, 1, 4],
          [4, 3, 5, 1, 6]]
</code></pre>
<p><code>a = 2</code>, and <code>b = 3</code>, the output should be <code>solution(matrix, a, b) = 36</code>.</p>
<p><img alt="example" src="https://github.com/palamarchukser/js-solutions/raw/master/static/example.gif"></p>
</li>
<li>
<p>For</p>
<pre><code>matrix = [[-2, 3, 5, -1],
          [4, 3, -10, 10]]
</code></pre>
<p><code>a = 1</code>, and <code>b = 1</code>, the output should be  <code>solution(matrix, a, b) = 10</code>.</p>
<p><img alt="example2" src="https://github.com/palamarchukser/js-solutions/raw/master/static/example2.gif"></p>
<p>The rotated rectangle with dimensions <code>1x1</code> is just one element, so the answer is the maximal element in <code>matrix</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>matrix = [[-2, 3],
          [4, 3]]
</code></pre>
<p><code>a = 1</code>, and <code>b = 2</code>, the output should be  <code>solution(matrix, a, b) = 7</code>.</p>
<p><img alt="example3" src="https://github.com/palamarchukser/js-solutions/raw/master/static/example3.gif"></p>
</li>
</ul>
