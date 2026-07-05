import prisma from "../../lib/db/db.js";

export class UploadsServices {
  async saveImages(filenames: string[]) {
    const data = filenames.map((name) => ({
      name,
      url: `/uploads/images/${name}`,
    }));

    return await prisma.uploadsImages.createManyAndReturn({
      data,
    });
  }
}
