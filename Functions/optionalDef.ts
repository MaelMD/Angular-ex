function createEmail(to: string, subject?: string): string {
    if (subject) return to + ":" + subject;
    else return to + ":" + "No Subject";
}

function add(x: number, y: number, z?: number): number {
    if (z) return x + y + z;
    else return x + y;
}