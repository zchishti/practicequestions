var canFinish = function(numCourses, prerequisites) {
    if(numCourses == 0) return true;
    
    let graph = makeList(prerequisites);
 //   let startNode = getStartNode(graph);
    console.log(graph);
    let visited = new Set();
    
    for(let startNode in graph){
        
        if(dfs(numCourses,graph,startNode,visited) == true){
            return true;
        }
    }
    
    return false;
    
}

function dfs(numCourses,graph, startNode, visited){
    if(numCourses == visited.size && graph[startNode].length == 0){
        return true;
    }
    
    if(visited.has(startNode)) return false;
    
    visited.add(startNode);
    
    for(let nei of graph[startNode]){
        dfs(numCourses,graph, nei, visited);
    }
}

function makeList(prerequisites){
    let graph = {};
    
    for(let edge of prerequisites){
        let [a , b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        
        graph[b].push(a);
    }
    
    return graph;
}


console.log(canFinish(2,[[1,0]]));

