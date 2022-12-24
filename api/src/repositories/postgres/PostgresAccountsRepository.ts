import { BlogPost } from "@prisma/client";
import { randomUUID } from "crypto";
import slugify from "slugify";

import prisma from "../../config/prisma";
import { IBlogRepository, ICreateBlogParams, IUpdateBlogParams } from "../../ports/IBlogRepository";

export default class PostgresBlogRepository implements IBlogRepository {
    async getAll(): Promise<BlogPost[]> {
        const queryResponse = await prisma.blogPost.findMany({});

        return queryResponse;
    }

    async getById(blogId: string): Promise<BlogPost> {
        const queryResponse = await prisma.blogPost.findUnique({
            where: {
                id: blogId,
            },
        });

        return queryResponse as BlogPost;
    }

    async create(blogObject: ICreateBlogParams): Promise<BlogPost> {
        const { title, resume, banner, category, body } = blogObject;

        const queryResponse = await prisma.blogPost.create({
            data: {
                id: randomUUID(),
                title,
                resume,
                banner,
                category,
                body,
                slug: slugify(title),
            },
        });

        return queryResponse;
    }

    async updateById(blogObject: IUpdateBlogParams): Promise<BlogPost> {
        const { id, title, resume, banner, category, body } = blogObject;

        const queryResponse = await prisma.blogPost.update({
            where: {
                id,
            },
            data: {
                title,
                resume,
                banner,
                category,
                body,
                slug: slugify(title),
            },
        });

        return queryResponse;
    }

    async deleteById(blogId: string): Promise<BlogPost> {
        const queryResponse = await prisma.blogPost.delete({
            where: {
                id: blogId,
            },
        });

        return queryResponse;
    }
}
