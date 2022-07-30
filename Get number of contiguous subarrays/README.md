<p>You are given an array of integers <code>arr</code>. 
Your task is to count the number of 
<b>contiguous subarrays</b>, such that elements of the subarray are arranged in strictly decreasing order.</p>
<p>For example, if <code>arr = [9, 8, 4, 9, 3]</code>, then the subarray <code>[9, 8, 4]</code> 
meets the criteria (<code>9 &gt; 8 &gt; 4</code>), but the subarray <code>[8, 4, 9]</code> does not.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>arr = [9, 8, 7, 6, 5]</code>, the output should be <code>solution(arr) = 15</code>.</p>
<p>All contiguous subarrays satisfy the condition of problem, because all elements of the array are arranged in decreasing order. There are <code>15</code> possible contiguous subarrays, so the answer is <code>15</code>.</p>
</li>
<li>
<p>For <code>arr = [10, 10, 10]</code>, the output should be <code>solution(arr) = 3</code>.</p>
<p>Since all of the elements are equal, the subarrays can't be in strictly decreasing order unless they contain only one element. There are <code>3</code> possible subarrays containing one element, so the answer is <code>3</code>.</p>
</li>
</ul>
