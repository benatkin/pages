function(doc) {
  var markdown = doc.markdown;
  if (markdown.replace)
    markdown = markdown.replace('</textarea>', '&lt;/textarea>');
  return {
    _id : doc._id,
    _rev : doc._rev,
    title : doc.title,
    markdown : markdown
  };
};
