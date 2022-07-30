<p>You are given an array of <strong>integers</strong> <code>a</code>, where each element <code>a[i]</code> represents the length of a ribbon.</p>
<p>Your goal is to obtain <code>k</code> ribbons of the same length, by cutting the ribbons into as many pieces as you want.</p>
<p>Your task is to calculate the maximum <strong>integer</strong> length <code>L</code> for which it is possible to obtain at least <code>k</code> ribbons of length <code>L</code> by cutting the given ones.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [5, 2, 7, 4, 9]</code> and <code>k = 5</code>, the output should be <code>solution(a, k) = 4</code>.</p>
<p><img src="https://github.com/palamarchukser/js-solutions/raw/master/static/cutTheRibbons.gif?_tm=1636921015018" alt="example"></p>
<p>Here's a way to achieve <code>5</code> ribbons of length <code>4</code>:</p>
<ul>
<li>Cut the ribbon of length <code>5</code> into one ribbon of length <code>1</code> (which can be discarded) and one ribbon of length <code>4</code>.</li>
<li>Cut the ribbon of length <code>7</code> into one ribbon of length <code>3</code> (which can be discarded) and one ribbon of length <code>4</code>.</li>
<li>Use the existing ribbon of length <code>4</code> (no need to cut it)</li>
<li>Cut the ribbon of length <code>9</code> into two ribbons of length <code>4</code> (and one of length <code>1</code> which can be discarded)</li>
<li>Discard the ribbon of length <code>2</code>.</li>
</ul>
<p>And since it wouldn't be possible to make <code>5</code> ribbons of any greater length, the answer is <code>4</code>.</p>
</li>
<li>
<p>For <code>a = [1, 2, 3, 4, 9]</code> and <code>k = 6</code>, the output should be <code>solution(a, k) = 2</code>.</p>
<p>Here's one way we could make <code>6</code> ribbons of length <code>2</code>:</p>
<ul>
<li>Cut the ribbon of length <code>9</code> into four ribbons of length <code>2</code> and one ribbon of length <code>1</code> (which won't be used).</li>
<li>Cut the ribbon of length <code>4</code> into two ribbons of length <code>2</code>.</li>
<li>Ignore all other ribbons (<code>1</code>, <code>2</code>, and <code>3</code>). Even though ribbons with lengths <code>2</code> and <code>3</code> can also be used to obtain the ribbon of length <code>2</code>, we don't need more than <code>6</code> ribbons of that length.</li>
</ul>
<p>It would technically be possible to make <code>6</code> ribbons of a length as great as <code>2.25</code>, but since only integer values are allowed, the answer is <code>2</code>.</p>
</li>
</ul>
