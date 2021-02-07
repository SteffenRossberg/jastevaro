export function Shaders() {
    return {
        BaseFragmentShader: `
        #version 150

        // ShaderType.FragmentShader

        in VS_OUT
        {
        vec3 vtx;
        vec2 tex;
        } vs_out;

        out vec3 color;

        void main()
        {
        color = vec3(0, vs_out.vtx.y / 20.0 + 0.4,0);
        }
        `,
        BaseVertexShader: `
        #version 150

        // ShaderType.VertexShader    

        in vec3 vtx;
        in vec2 tex;

        out VS_OUT
        {
        vec3 vtx;
        vec2 tex;
        } vs_out;

        uniform mat4 MVP;

        void main()
        {
            // Output position of the vertex, in clip space : MVP * position
            vec4 v = vec4(vtx, 1); // Transform an homogeneous 4D vector, remember ?
            gl_Position = MVP * v;
            vs_out.vtx = vtx;
            vs_out.tex = tex;
        }
        `,
        StreetFragmentShader: `
        #version 150

        // ShaderType.FragmentShader

        uniform sampler2D tex;
        in VS_OUT
        {
        vec3 vtx;
        vec2 tex;
        } vs_out;

        out vec4 color;

        void main()
        {
        color = texture(tex, vs_out.tex);
        }
        `,
        StreetVertexShader: `
        #version 150

        // ShaderType.VertexShader    

        in vec3 vtx;
        in vec2 tex;

        out VS_OUT
        {
        vec3 vtx;
        vec2 tex;
        } vs_out;

        uniform mat4 MVP;
        
        void main()
        {
            // Output position of the vertex, in clip space : MVP * position
            vec4 v = vec4(vtx, 1); // Transform an homogeneous 4D vector, remember ?
            gl_Position = MVP * v;
            vs_out.vtx = vtx;
            vs_out.tex = tex;
        }
        `
    };
};