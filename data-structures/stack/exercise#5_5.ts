/*

You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform
this absolute path into its simplified canonical path.

The rules of a Unix-style file system are as follows:

A single period '.' represents the current directory.
A double period '..' represents the previous/parent directory.
Multiple consecutive slashes such as '//' and '///' are treated as single slash '/'.

Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example,
'...' and '....' are valid directory or file names.

The simplified canonical path should follow these rules:
The path must start with a single slash '/'.
Directories within the path must be separated by exactly one slash '/'.
The path most not end with a slash '/', unless it is the root directory.
The path must not have any single or double periods('.' and '..') used to denote current or parent directories.

Return the simplified canonical path.

-path is a valid absolute Unix path.

Example 1:
Input: path = "/home/"
Output: "/home"
Explanation: 
The trailing slash should be removed.

Example 2:
Input: path = "/home//foo/"
Output: "/home"/foo"
Explanation: Multiple consecutive slashes are replaced by a single one.

Example 3:
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation: A double period ".." refers to the directory up a level (the parent directory)

Example 4:
Input: path = "/../"
Output: "/"
Explanation: Going on level up from the root directory is not possible.

Example 5:
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation: '...' is a valid name for a directory in this problem.

Constraints:
1 <= path.length <= 3000
path is consists of English letters, digits, period '.', slash '/' or '_'.

*/

function simplifiedCanonicalPath(path: string) {
    let separatedPath = path.split("/")

    if (separatedPath[0] === "") {
        if(separatedPath.length === 1 || (separatedPath[0] === "" && separatedPath[1] === "..")) {
            return "/"
        }
        if(separatedPath[separatedPath.length - 1] === "") {
            separatedPath.pop();
        }
        const partialArray: string[] = [];
        for(let i = 0; i < separatedPath.length; i++) {
            const part = separatedPath[i];
            if(part === "" || part === ".") {
                continue;
            } else if(part === "..") {
                if(partialArray.length > 0) {
                    partialArray.pop();
                }
            } else {
                partialArray.push(part);
            }
        }
        return "/" + partialArray.join("/");
    } else {
        return "Error: ruta inválida. Por favor inténtelo de nuevo."
    }

}

console.log(simplifiedCanonicalPath("/home/"));
console.log(simplifiedCanonicalPath("/home//foo/"));
console.log(simplifiedCanonicalPath("/home/user/Documents/../Pictures"));
console.log(simplifiedCanonicalPath("/../"));
console.log(simplifiedCanonicalPath("/.../a/../b/c/../d/./"));