export const categories_old = [
    "Javascript", "HTML", "CSS", "React JS", "Php"
];

export const categories = {
    'javascript': 'Javascript',
    'html': 'HTML',
    'css': 'CSS',
    'react-js': 'React JS',
    'php': 'Php',
}

export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined
} = {}) {

    const filteredPosts = posts.reduce((acc, post) => {

        const { draft } = post.frontmatter;
        // if (filterOutDrafts && draft) return acc
        acc.push(post)
        return acc;
    }, [])

    if (sortByDate) {
        filteredPosts.sort((a, b) => {
            return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
    }

    return filteredPosts;
}

