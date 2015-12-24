'use strict';

export default function({template}) {
  const wrapperIfTemplate = template(`
    if (process.env.NODE_ENV !== "production") {
      NODE;
    }
  `);

  const VISITED_KEY = 'transform-dev-warning-' + Date.now();

  return {
    visitor: {
      Program(path) {
        // On program start, do an explicit traversal up front for this plugin.
        path.traverse({
          CallExpression(path2) {
            if (path2.node[VISITED_KEY]) {
              return;
            }

            path2.node[VISITED_KEY] = true;

            if (path2.node.callee.name === 'warning') {
              path2.replaceWith(wrapperIfTemplate(
                {
                  NODE: path2.node,
                }
              ));
            }
          },
        });
      },
    },
  };
}
