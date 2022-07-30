<p>You are given array of integers called <code>blocks</code>. Each of the values in this array represents the width of a block - the <code>i<sup>th</sup></code> block has a height of <code>1</code> and a width of <code>blocks[i]</code> (i.e. it's a <code>1 x blocks[i]</code> block).</p>
<p>You want to pack all the given blocks into a rectangular container of dimensions <code>height x width</code>, according to the following rules:</p>
<ul>
<li>Place blocks into the container row by row, starting with block <code>0</code>.</li>
<li>For each row, place the blocks into the container one by one, <strong>in the order they are given in the <code>blocks</code> array</strong>.</li>
<li>If there is not enough space to put the current block in the current row, start filling the next row.</li>
</ul>
<p>You are given the value <code>height</code> of the rectangular container. Your task is to find the minimal possible <code>width</code> of a rectangular container in which all blocks can fit. Find and return this minimal possible <code>width</code> value.</p>
<p>NOTE: The blocks cannot be rotated.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>blocks = [1, 3, 1, 3, 3]</code> and <code>height = 2</code>, the output should be <code>solution(blocks, height) = 6</code>.</p>
<p>Here's how the blocks should be packed in a container of size <code>2 x 6</code>:<br>
<img src="https://codesignal.s3.amazonaws.com/tasks/packBlocks/img/exp1.png?_tm=1581986490350" alt=""></p>
<p>Note that it wouldn't be possible to fit these blocks in a container that's any less wide than <code>6</code>.</p>
</li>
<li>
<p>For <code>blocks = [2, 3, 1, 1, 1]</code> and <code>height = 2</code>, the output should be <code>solution(blocks, height) = 5</code>.</p>
<p>Here's how the blocks should be packed in container of size <code>2 x 5</code>:<br>
<img src="https://codesignal.s3.amazonaws.com/tasks/packBlocks/img/exp2.png?_tm=1581986490719" alt=""></p>
<p>It might seem like these blocks could be packed into a container of size <code>2 x 4</code>, but since we must place them in the order they appear in the <code>blocks</code> array, the width must be at least <code>5</code>.</p>
</li>
</ul>
