<p>You are given an array of non-negative integers <code>numbers</code>. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: <code>010</code> will be considered just <code>10</code>).</p>
<p>Your task is to check whether it is possible to apply the swap operation <strong>at most once</strong>, so that the elements of the resulting array are <em>strictly increasing</em>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>numbers = [1, 5, 10, 20]</code>, the output should be <code>solution(numbers) = true</code>.</p>
<p>The initial array is already <em>strictly increasing</em>, so no actions are required.</p>
</li>
<li>
<p>For <code>numbers = [1, 3, 900, 10]</code>, the output should be <code>solution(numbers) = true</code>.</p>
<p>By choosing <code>numbers[2] = 900</code> and swapping its first and third digits, the resulting number <code>009</code> is considered to be just <code>9</code>. So the updated array will look like <code>[1, 3, 9, 10]</code>, which is <em>strictly increasing</em>.</p>
</li>
<li>
<p>For <code>numbers = [13, 31, 30]</code>, the output should be <code>solution(numbers) = false</code>.</p>
<ul>
<li>The initial array elements are not increasing.</li>
<li>By swapping the digits of <code>numbers[0] = 13</code>, the array becomes <code>[31, 31, 30]</code> which is not <em>strictly increasing</em>;</li>
<li>By swapping the digits of <code>numbers[1] = 31</code>, the array becomes <code>[13, 13, 30]</code> which is not <em>strictly increasing</em>;</li>
<li>By swapping the digits of <code>numbers[2] = 30</code>, the array becomes <code>[13, 31, 3]</code> which is not <em>strictly increasing</em>;</li>
</ul>
<p>So, it's not possible to obtain a <em>strictly increasing</em> array, and the answer is <code>false</code>.</p>
</li>
</ul>
