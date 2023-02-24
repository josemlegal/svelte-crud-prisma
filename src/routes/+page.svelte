<div class="grid">
	<div>
		<h2>Articles:</h2>
		<article>
			<header />
			<p />
			<form action="?/deleteArticle&id=" method="POST">
				<button type="submit" class="outline secondary">Delete Article</button>
			</form>
			<a href="/" role="button" class="outline constrast" style="width: 100%;">Edit Article</a>
		</article>
	</div>
	<form action="?/createArticle" method="POST">
		<h3>New Article</h3>
		<label for="title"> Title </label>
		<input type="text" id="title" name="title" />
		<label for="title"> Title </label>
		<textarea id="content" name="content" rows={5} />
		<button type="submit">Add Article</button>
	</form>
</div>
